import Card from './styles';

/**
 * A function to render a report card component.
 *
 * @param {Object} props - The component's props.
 * @param {string} props.title - The title of the report card.
 * @param {Array} props.output - An array of objects representing the report data.
 * @param {Object} props.output[].text - The text content of a report item.
 * @param {number} [props.output[].likeliness] - The likelihood percentage of a report item.
 *
 * @returns {JSX.Element} - The rendered report card component.
 */
function ReportCard({ title, output }) {
  return (
    <Card>
      <h4 className='heading-4 bg-primary'>{title}</h4>
      <ul className='body'>
        {output.map((item, index) => (
          <li key={index} className='item'>
            {item.text}{' '}
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
}

export default ReportCard;
