import Card from './styles';

const ReportCard = ({ title, output }) => {
  return (
    <Card>
      <h4 className='heading-4 bg-primary'>{title}</h4>
      <ul className='body'>
        {output.map((item, index) => (
          <li key={index} className='item'>
            {item.text}
            {item.likeliness && (
              <span className='text-[14px] ml-2 text-gray-500'>
                {item.likeliness}%
              </span>
            )}
          </li>
        ))}

        {!output.length && (
          <p className='text-[14px] text-gray-500'>No data available</p>
        )}
      </ul>
    </Card>
  );
};

export default ReportCard;
