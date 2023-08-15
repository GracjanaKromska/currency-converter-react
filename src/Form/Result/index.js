import { Wrapper } from "./styled";

export const Result = ({ result }) => (
    <Wrapper>
      {!!result && (
        <>
          {result.sourceAmount.toFixed(2)} PLN={" "}

          <strong>
            {result.targetAmount.toFixed(2)} {result.currency}
          </strong>
        </>
      )}
    </Wrapper>
  );