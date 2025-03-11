import { RotatingLines } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';
export const Loader = () => {
  return (
    <LoaderWrapper>
      <RotatingLines
        visible={true}
        // color="red"
        height="16"
        width="16"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </LoaderWrapper>
  );
};
