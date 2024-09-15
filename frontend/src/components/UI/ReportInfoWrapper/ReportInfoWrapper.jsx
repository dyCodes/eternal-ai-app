import { StyledSection } from "./styles";

const ReportInfoWrapper = ({ children, title }) => {
  return (
    <StyledSection>
      <h3 className="heading-3">{title}</h3>
      <div className="content">{children}</div>
    </StyledSection>
  );
};

export default ReportInfoWrapper;
