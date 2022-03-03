"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function autobind(_, _2, desc) {
    const originalName = desc.value;
    const newDesc = {
        configurable: true,
        get() {
            const boundFn = originalName.bind(this);
            return boundFn;
        }
    };
    return newDesc;
}
class Project {
    constructor() {
        this.projectInputEl = (document.getElementById("project-input"));
        this.appIdEl = document.getElementById("app");
        const loadDomNode = document.importNode(this.projectInputEl.content, true);
        this.formEl = loadDomNode.firstElementChild;
        this.formEl.id = "user-input";
        this.titleInput = this.formEl.querySelector("#title");
        this.descInput = (this.formEl.querySelector("#description"));
        this.peopleInput = this.formEl.querySelector("#people");
        this.configureListener();
        this.attach(this.formEl);
    }
    submitBindHandler(e) {
        e.preventDefault();
        console.log(this.titleInput.value);
    }
    configureListener() {
        this.formEl.addEventListener("submit", this.submitBindHandler);
    }
    attach(el) {
        this.appIdEl.insertAdjacentElement("afterbegin", el);
    }
}
__decorate([
    autobind
], Project.prototype, "submitBindHandler", null);
const project = new Project();
