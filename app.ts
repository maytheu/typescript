import axios from "axios";
// declare let google: any; not needed since types added

const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;

const GOOGLE_KEY: string = "AIzaSyDfoiGlbkUFLQgPR2s3he7pEE8JLI_X8Kc";

// response type from google
type GoogleResponse = {
  results: { geometry: { location: { lat: number; lng: number } } }[];
  status: "OK" | "ZERO RESULT";
};

form.addEventListener("submit", function (e: Event) {
  e.preventDefault();
  const address = addressInput.value;
  // integrate google map api
  axios
    .get<GoogleResponse>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        address
      )}&key=${GOOGLE_KEY}`
    )
    .then((res) => {
      if (res.data.status !== "OK") {
        // handle in catch block
        throw new Error("No Location found");
      }
      const coordinate = res.data.results[0].geometry.location;
      const map = new google.maps.Map(document.getElementById("map")!, {
        center: coordinate,
        zoom: 16,
      });
      new google.maps.Marker({
        position: coordinate,
        map: map,
      });
    })
    .catch((e) => {
      alert(e.message);
      console.log(e);
    });
});
