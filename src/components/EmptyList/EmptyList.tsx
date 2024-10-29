import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBatteryEmpty } from '@fortawesome/free-solid-svg-icons';
import './emptyList.scss';

interface EmptyListProps {
  message: string;
}

const EmptyList = ({ message }: EmptyListProps): JSX.Element => {
  return (
    <div className="empty-state">
      <FontAwesomeIcon icon={faBatteryEmpty} size="10x" />
      <p className="empty-list">{message}</p>
    </div>
  );
};

export default EmptyList;
