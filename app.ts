// validate object interface
interface Validatable {
  value: string | number;
  required?: boolean;
  minLen?: number;
  maxLen?: number;
  max?: number;
  min?: number;
}

// validation function
function validate(value: Validatable): boolean {
  let isValid = true;
  if (value.required) {
    isValid = isValid && value.value.toString().trim().length !== 0;
  }
  if (value.minLen) {
    isValid = isValid && value.value.toString().trim().length >= value.minLen;
  }
  if (value.maxLen != null && typeof value.value === "string") {
    isValid = isValid && value.value.trim().length <= value.maxLen;
  }
  if (value.max != null && typeof value.value === "number") {
    isValid = isValid && value.value < value.max;
  }
  if (value.min != null && typeof value.value === "number") {
    isValid = isValid && value.value > value.min;
  }
  return isValid;
}

// decorators - method
// autobind decorayor
function autobind(_: any, _2: string, desc: PropertyDescriptor) {
  // meethod name
  const originalName = desc.value;
  const newDesc: PropertyDescriptor = {
    configurable: true,
    get() {
      // calling bin on the bound function
      const boundFn = originalName.bind(this);
      return boundFn;
    },
  };
  return newDesc;
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

  // handle user input trivial soln
  private getUserInput(): [string, string, number] | void {
    const titleVal = this.titleInput.value;
    const descVal = this.descInput.value;
    const peopleVal = this.peopleInput.value;
    // trivia solution
    if (
      titleVal.trim().length === 0 ||
      descVal.trim().length === 0 ||
      peopleVal.trim().length === 0
    ) {
      alert("Enter Input");
      this.clearInput();
      return;
    } else {
      this.clearInput();
      return [titleVal, descVal, +peopleVal];
    }
  }

  // handle sol using functiontovalidate
  private getUserInput2(): [string, string, number] | void {
    const titleVal = this.titleInput.value;
    const descVal = this.descInput.value;
    const peopleVal = this.peopleInput.value;

    const validateTitle: Validatable = {
      value: titleVal,
      required: true,
      maxLen: 10,
    };
    const validateDesc: Validatable = {
      value: descVal,
      required: true,
      minLen: 5,
    };
    const validatePeople: Validatable = {
      value: +peopleVal,
      required: true,
      min: 2,
      max: 5,
    };
    if (
      validate(validateTitle) &&
      validate(validateDesc) &&
      validate(validatePeople)
    ) {
      alert("Enter Input");
      this.clearInput();
      return;
    } else {
      this.clearInput();
      return [titleVal, descVal, +peopleVal];
    }
  }

  // clear user input
  private clearInput() {
    this.titleInput.value = "";
    this.descInput.value = "";
    this.peopleInput.value = "";
  }

  @autobind
  // bind the event listener method
  private submitBindHandler(e: Event) {
    e.preventDefault();
    const userInput = this.getUserInput();
    // since userInput is a tuple and tuple is just an array in js
    if (Array.isArray(userInput)) {
      const [title, desc, people] = userInput;
      console.log(title, desc, people);
    }
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

// list project class
class ProjectList {
  projectListEl: HTMLTemplateElement;
  appIdEl: HTMLDivElement;
  ListEl: HTMLElement;

  constructor(private type: "active" | "finished") {
    this.projectListEl = <HTMLTemplateElement>(
      document.getElementById("project-list")
    );
    this.appIdEl = document.getElementById("app")! as HTMLDivElement;

    const loadDomNode = document.importNode(this.projectListEl.content, true);
    this.ListEl = loadDomNode.firstElementChild as HTMLFormElement;

    this.ListEl.id = `${this.type}-projects`;

    this.attach(this.ListEl);

    this.renderList();
  }

  // attach list
  private attach(el: HTMLElement) {
    this.appIdEl.insertAdjacentElement("afterend", el);
  }

  // render list
  private renderList() {
    const listId = `${this.type}-projects list`;
    this.ListEl.querySelector("ul")!.id = listId;
    this.ListEl.querySelector(
      "h2"
    )!.textContent = `${this.type.toUpperCase()} PROJECTS`;
  }
}

const project = new Project();
const fProject = new ProjectList("finished");
const actProject = new ProjectList("active");
