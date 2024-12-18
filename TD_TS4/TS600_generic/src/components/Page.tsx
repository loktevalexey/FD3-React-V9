import ButtonPanel from "./ButtonPanelA";
//import ButtonPanel from "./ButtonPanelB";

//type MyButtonCode="hello"|"goodbye";

//const var1 = Math.random()>0.5 ? "aaa" : "bbb";
//let var2 = Math.random()>0.5 ? "aaa" : "bbb";
//const var3 = { color: (Math.random()>0.5)?"aaa":"bbb" };
//const var4 = { color: (Math.random()>0.5)?"aaa":"bbb" } as const;

export const Page = () => {

  return (
    <ButtonPanel
      buttons={[
        { caption: "Привет!", code: "hello" },
        { caption: "Пока!", code: "goodbye" }
      ]}
      onClick={buttonCode=>{
        if ( buttonCode==="hello" ) {
          alert("Ну привет!");
        }
        if ( buttonCode==="goodbye" ) {
          alert("Ну и пока!");
        }
      }}
    />
  );

};
