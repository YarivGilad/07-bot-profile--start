import styled from "styled-components";
import { useEffect, useState } from "react";
import { List } from "./list.tsx";
import { Robot } from "../types.ts";
import { Filter } from "./filter.tsx";
// import { Profile } from "./profile.tsx";
import { TopBar } from "./topBar.tsx";

export function App() {
  const [robotsList, setRobotsList] = useState<Robot[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    async function getData(): Promise<void> {
      try {
        const data_url = "https://api.npoint.io/86690d80ff3d455133f0";
        const response = await fetch(data_url);
        const data = (await response.json()) as Robot[];
        // console.table(data);
        // console.log(`${data.length} items loaded`);
        setRobotsList(data.map((item) => ({ ...item, show: true })));
      } catch (error: unknown) {
        setErrorMsg(`fetch operation failed: ${(error as Error).message}`);
      } finally {
        setIsLoading(false);
      }
    }
    getData().catch(console.log);
  }, []);

  return (
    <Div>
      <TopBar><h1>Pick a Bot</h1></TopBar>
      {errorMsg ? (
        <h1 className="error-msg">{errorMsg}</h1>
      ) : isLoading ? (
        <h1 className="loading">Loading...</h1>
      ) : (
        <>
          <Filter listData={robotsList} onFilter={setRobotsList} />
          <div className="content-box">
            {/* <Profile /> */}
            <List listData={robotsList} />
          </div>
        </>
      )}
    </Div>
  );
}

const Div = styled.div`
  background: Cornsilk;
  padding: 10.5rem 1.5rem 1.5rem;
  border-radius: 0.4rem;
  box-shadow: 0 0.4rem 1.5rem DimGrey;
  position: relative;
  min-width: 60rem;
  min-height: 45rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div.content-box {
    display: flex;
  }

  h1.loading, h1.error-msg{
    font-size: 5rem;
    font-weight: normal;
    font-family: "Griffy", cursive;
    text-align: center;
    color: darkslateblue;
    margin-top: -10rem;
  }

  h1.error-msg{
    font-family: "Expletus Sans";
  }
`;

