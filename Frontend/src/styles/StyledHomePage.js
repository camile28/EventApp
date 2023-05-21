import styled from "styled-components";

export const HomePageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("https://img.freepik.com/premium-vector/background-with-falling-confetti-white-background_103688-1013.jpg?w=2000");
  background-size: cover;
  background-position: center;
`;

export const HomePageContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

export const HomePageTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
  text-align: center;
`;

export const HomePageImage = styled.img`
  width: 100%;
  max-width: 800px;
  margin-bottom: 40px;
`;
