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

// ACCORDION LIST ANIMATION
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

function initScrollSuave() {
  //SMOOTH SCROLL INTO VIEW
  const linksInternos = document.querySelectorAll(".js-menu a[href^='#']");

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
    });

    //Forma alternativa
    // const topo = section.offsetTop;
    // window.scrollTo({
    //   top: topo,
    //   behavior: "smooth",
    // });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
initScrollSuave();

function initAnimacaoScroll() {
  //Animação ao scroll
  const sections = document.querySelectorAll(".js-scroll");
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.7;
    sections[0].classList.add("ativo");

    function animarAoScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0;
        if (isSectionVisible) {
          section.classList.add("ativo");
        }
        //Caso queira reiniciar a animação quando o usuário voltar pra parte de cima do seite, pode ser criado um else removendo a classe ativo das sections
      });
    }

    window.addEventListener("scroll", animarAoScroll);
  }
}
initAnimacaoScroll();
