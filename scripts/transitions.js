const produtos = document.getElementsByClassName('SECTION-PRODUTOS');
const resetText = document.getElementsByTagName('PRODUTOS-CONTAINER-TEXT');
const resetImage = document.getElementsByTagName('PRODUTOS-CONTAINER-IMAGE');
const handle = () => {
   console.log('handle');
   produtos[0].classList.add('show-produto');
};
