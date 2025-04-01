import { useParams } from 'react-router-dom';
import { CamperItem } from 'components/CamperItem/CamperItem';

export default function DetailsPage() {
  const { id } = useParams();

  return <CamperItem id={id} />;
}
