import { useCurrentDate } from "./useCurrentDate";
import { Wrapper } from "./styled";

const formatDate = (date) => date.toLocaleDateString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
});

export const Clock = () => {
    const date = useCurrentDate();

    return (
        <Wrapper>
            Dzisiaj jest
            {" "}
            {formatDate(date)}
        </Wrapper>
    )
};