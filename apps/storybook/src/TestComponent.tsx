import { css, styled } from '@linaria/react';

// Test if Linaria works inside the Storybook package
const testStyles = css`
  color: blue;
  font-weight: bold;
  padding: 8px;
`;

const StyledDiv = styled.div`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 16px 0;
`;

export interface TestComponentProps {
  children: React.ReactNode;
}

export const TestComponent = ({ children }: TestComponentProps) => {
  return (
    <StyledDiv>
      <div className={testStyles}>
        Test Component: {children}
      </div>
    </StyledDiv>
  );
};