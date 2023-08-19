import { StyledResult } from "./styled";

export const Result = ({ result }) => (
  <StyledResult>
    {!!result && (
      <>
        {result.sourceAmount.toFixed(2)} PLN={" "}

        <strong>
          {result.targetAmount.toFixed(2)} {result.currency}
        </strong>
      </>
    )}
  </StyledResult>
);