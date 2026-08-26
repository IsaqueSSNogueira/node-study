
// verify minimum input conditions
export const verifyMinInputConditions = (element, type) => {
    if(type === "user"){
        return element.value.trim().length >= 2;
    }
    else if(type === "password"){
        return element.value.trim().length >= 5;
    }
};


// clear inputs
export const clearInputs = () => {
		document.querySelectorAll(".formInput").forEach(input => {input.value = "";})
};


// toggle auth screen (login/register)
export const moveAuthScreen = () => {
  const tabSwitcherButtons = document.querySelectorAll(".tabSwitcherButton");
  const authScreen = document.querySelector("#authScreen");

  tabSwitcherButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const mode = btn.dataset.mode;

      if (mode === "login") {
        authScreen.classList.remove("moveAuthScreen");
      } else {
        authScreen.classList.add("moveAuthScreen");
      }


      // more visually pleasing 
      setTimeout(() => {
      	clearInputs()
      }, 500)

    });
  });
};