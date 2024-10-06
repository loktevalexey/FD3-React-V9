type Button = {
  code: string;
  caption: string;
}

interface MenuProps {
  buttons: Array<Button>;
  onClick: (buttonCode:string) => void;
}

const ButtonPanelA = (props:MenuProps) => {

  return (
    <div>
      Выберите действие:<br/>
      {
        props.buttons.map( (button,index) => 
          <input key={index} type="button" value={button.caption} 
            onClick={ ()=>props.onClick(button.code) } />
        )
      }
    </div>
  );

};

export default ButtonPanelA;
