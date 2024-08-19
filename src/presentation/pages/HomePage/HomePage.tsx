import React from "react";
import PropTypes from "prop-types";
import KSLIcon from "mfe_ux_kuosel/atoms/KSLIcon";
// import KSLCard from '../components/molecules/KSLCard';
// import KSLCagetoryCard from '../components/molecules/KSLCagetoryCard';
// import KSLTransactionCard from '../components/molecules/KSLTransactionCard';
// import KSLButton from '../components/atoms/KSLButton';

const HomePage = () => {
  return (
    <div className="dashboard p-4">
      {/* Greeting */}
      <div className="greeting flex items-center justify-between">
        <div className="flex items-center">
          <KSLIcon name="profile" size="1.5rem" />
          <div className="ml-4">
            <div className="text-lg font-bold">Hello Mahmud</div>
            <div className="text-sm text-gray-500">Welcome Back!</div>
          </div>
        </div>
        <KSLIcon name="search" />
      </div>

      {/* Planned Expenses */}
      <div className="planned-expenses mt-8">
        <div className="text-2xl font-bold">$5,570.00</div>
        <div className="text-sm text-gray-500">Planned Expenses</div>
        <div className="text-sm text-green-600">$50 Left to budget</div>
      </div>

      {/* Donut Chart */}
      <div className="donut-chart mt-8">
        {/* Aquí podrías integrar una librería de gráficos */}
      </div>
    </div>
  );
};

HomePage.propTypes = {};

export default HomePage;
