import React from 'react';
import PropTypes from 'prop-types';
import KSLIcon from 'mfe_ux_kuosel/atoms/KSLIcon';
import KSLCategoryCarousel from 'mfe_ux_kuosel/organisms/KSLCategoryCarousel';
import KSLTransactionCard from 'mfe_ux_kuosel/molecules/KSLTransactionCard';
import KSLBottomNavBar from 'mfe_ux_kuosel/organisms/KSLBottomNavBar';

const HomePage: React.FC = () => {
  return (
    <div className='dashboard p-4'>
      <div className='flex items-center'>
        <div>
          <p className='text-gray-500 text-sm'>Planned Expenses</p>
          <p className='text-black text-2xl font-bold'>$5,570.00</p>
          <div className='mt-2 py-1 px-3 bg-white text-gray-500 rounded-lg'>
            $50 Left to budget
          </div>
        </div>
        <div className='ml-8'></div>
      </div>
      <div>
        <KSLCategoryCarousel
          categories={[
            {
              amount: '$3,570.00',
              category: 'Housing',
              percentage: '70%',
            },
            {
              amount: '$990.00',
              category: 'Food',
              percentage: '15%',
            },
            {
              amount: '$455.00',
              category: 'Saving',
              percentage: '10%',
            },
          ]}
          onAddCategory={() => {}}
        />
      </div>

      <div>
        <div className='d-felx justify-content-between'>
          <h1>Actividad reciente</h1>
          <span>Mostrar todo</span>
        </div>
        <div>
          {Array.from({length: 10}).map((_e, index) => (
            <KSLTransactionCard
              key={index}
              amount='$800.00'
              categoryIcon='home'
              change='+0.31%'
              date='25 Sep 2023'
              isPositiveChange
              title='Amazon Prime'
            />
          ))}
        </div>
      </div>
    </div>
  );
};

HomePage.propTypes = {};

export default HomePage;
