import { useParams } from "react-router-dom";
import { adidasArr, AdidasItem } from "./Adidas";
import { pumaArr, PumaItem } from "./Puma";

type CrossModels = {
  [key: string]: (AdidasItem[] | PumaItem[])
}

const crossModels: CrossModels = {
  adidas: adidasArr,
  puma: pumaArr
}

export const Model = () => {
  const { model, id } = useParams()
  console.log(id);
  console.log(model);

  const currentModel = crossModels[`${model}`].find(el => el.id === Number(id))

  return (
    <div style={{ textAlign: 'center' }}>
      {currentModel ?
        <>
          <h2>{currentModel.model}</h2>
          <h4>{currentModel.collection}</h4>
          <h3>{currentModel.price}</h3>
          <img src={currentModel.picture} alt={currentModel?.model} style={{ width: '450px', height: 'auto' }} />
        </>
        : <h2>Такой модели не существует</h2>
      }
    </div>
  )
}