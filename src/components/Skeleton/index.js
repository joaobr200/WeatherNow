import styled from "styled-components";

const Skeleton = styled.div`
  background-image: linear-gradient(
    -90deg,
    #e7edf1 0%,
    #f8f8f8 50%,
    #e7edf1 100%
  );
  background-size: 400% 400%;
  animation: ShimmerEffect 1.2s ease-in-out infinite;

  @keyframes ShimmerEffect {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;

export default Skeleton;
