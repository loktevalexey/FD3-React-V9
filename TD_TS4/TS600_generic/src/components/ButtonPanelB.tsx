type Button<ButtonCode> = {
  code: ButtonCode;
  caption: string;
}

interface MenuProps<ButtonCode> {
  buttons: Array<Button<ButtonCode>>;
  onClick: (buttonCode:ButtonCode) => void;
}

const ButtonPanelB = function<ButtonCode>(props:MenuProps<ButtonCode>) {

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

export default ButtonPanelB;
