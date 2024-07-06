//Isolamos todo o código dentro de initTabNav pra evitar possíveis conflitos futuros, caso seja necessário utilizar novamente uma variavel chamada tabMenu ou tabContent, por exemplo
function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");
  const activeClass = "ativo";
  tabContent[0].classList.add(activeClass);

  // Navegação por tab, relacionando a imagem ao seu respectivo conteúdo
  //Esse if serve pra verificar se os elementos tabmenu e tabcontent realmente existem na tela, se sim, o código vai ser executado, se não, não executa.
  if (tabMenu.length && tabContent.length) {
    //Função para ativar o tabContent
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove(activeClass);
      });
      tabContent[index].classList.add(activeClass);
    }

    //Função para passar o index do tabmenu dentro do active tab
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();

function initAccordionList() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo";
  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordionList();
