/* Apresentação das fotos: preserva os cadastros e os arquivos originais. */
const ProductPhotos = (() => {
  const cutouts = new Set(['43117','71219','43135','49008','59439','97614','63043','65071','95285','44831','95466','71059','49009','95575','44701','71043','71152','59709','69290','69181','69038','60553','71158','44056','RL86488','RL75557']);
  function url(product) {
    if (cutouts.has(product.id)) return 'assets/produtos/fundos-uniformes/' + product.id + '.png?v=marfim-20261114';
    return product.imagem || 'assets/produtos/' + product.id + '.jpg';
  }
  return {url};
})();
