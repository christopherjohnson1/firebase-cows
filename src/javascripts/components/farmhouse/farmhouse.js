import farmerData from '../../helpers/data/farmerData';
import farmerComponent from '../farmer/farmer';
import utils from '../../helpers/utils';
import singleFarmer from '../singleFarmer/singleFarmer';

const buildFarmers = () => {
  farmerData.getFarmers()
    .then((farmers) => {
      let domString = '';
      domString += '<h2 class="text-center">Farmhouse</h2>';
      domString += '<div class="d-flex flex-wrap">';
      farmers.forEach((farmer) => {
        domString += farmerComponent.farmMaker(farmer);
      });
      domString += '</div>';
      utils.printToDom('farmhouse', domString);
      $('body').on('click', '.farmer-card', singleFarmer.buildFarmer);
    })
    .catch((err) => console.error('problem with getFarmers', err));
};

export default { buildFarmers };
