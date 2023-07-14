import styled from "styled-components";
import { Card } from "./card.tsx";
import { Robot } from "../types.ts";

interface ListProps {
  listData: Robot[];
}

export function List({ listData }: ListProps) {
  return (
    <Div>
      <ul>
        {listData
          .filter((item) => item.show)
          .map((item) => (
            <li key={item.id}>
              <Card {...item} />
            </li>
          ))}
      </ul>
    </Div>
  );
}

const Div = styled.div`
  background: oldlace;
  max-height: 65rem;
  min-width: 56rem;
  border-radius: 0.4rem;
  overflow-x: hidden;
  overflow-y: scroll;
  box-shadow: 0 0.2rem 0.8rem DimGrey;

  ul > li {
    &:nth-child(even) {
      background: honeydew;
    }
    &:nth-child(odd) {
      background: white;
    }
  }
`;