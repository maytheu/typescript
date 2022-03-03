// decorators - method
// autobind decorayor
function autobind(_:any, _2:string, desc:PropertyDescriptor){
  // meethod name
  const originalName=desc.value
  const newDesc:PropertyDescriptor={
    configurable:true,
    get(){
      // calling bin on the bound function
      const boundFn = originalName.bind(this)
      return boundFn
    }
  }
  return newDesc
}

class Project {
  projectInputEl: HTMLTemplateElement;
  appIdEl: HTMLDivElement;
  formEl: HTMLFormElement;
  // input varaible
  titleInput: HTMLInputElement;
  peopleInput: HTMLInputElement;
  descInput: HTMLInputElement;

  // initializing in the constructor to instantiate immediately the instance
  constructor() {
    // typecasting in 2 diff ways
    this.projectInputEl = <HTMLTemplateElement>(
      document.getElementById("project-input")!
    );
    this.appIdEl = document.getElementById("app")! as HTMLDivElement;

    //load form element to dom
    const loadDomNode = document.importNode(this.projectInputEl.content, true);
    this.formEl = loadDomNode.firstElementChild as HTMLFormElement;

    // interacting with element by adding id
    this.formEl.id = "user-input";

    this.titleInput = this.formEl.querySelector("#title") as HTMLInputElement;
    this.descInput = <HTMLInputElement>(
      this.formEl.querySelector("#description")
    );
    this.peopleInput = <HTMLInputElement>this.formEl.querySelector("#people");

    this.configureListener();

    this.attach(this.formEl);
  }

  
  @autobind
  // bind the event listener method
  private submitBindHandler(e: Event) {
    e.preventDefault();
    console.log(this.titleInput.value);
  }


  // adding event listernier
  private configureListener() {
    // this.formEl.addEventListener("submit", this.submitBindHandler.bind(this));
    // usinf decorators
    this.formEl.addEventListener("submit", this.submitBindHandler);
  }

  // renderring element
  private attach(el: HTMLFormElement) {
    this.appIdEl.insertAdjacentElement("afterbegin", el);
  }
}

const project = new Project();
