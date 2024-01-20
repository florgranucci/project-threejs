import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'
import state from '../store'

const ColorPicker = () => {
  const snap = useSnapshot(state)
  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker
        color={snap.color}
        disableAlpha
        /* presetColors={[
          '#FFB6C1', // LightPink
          '#FFC0CB', // Pink
          '#FFDAB9', // PeachPuff
          '#FFDEAD', // NavajoWhite
          '#FFE4B5', // Moccasin
          '#FFE4C4', // Bisque
          '#FFE4E1', // MistyRose
          '#FFEBCD', // BlanchedAlmond
          '#FFEFD5', // PapayaWhip
          '#FFF0F5', // LavenderBlush
        ]} */
        onChange={(color) => state.color = color.hex}
      />
    </div>
  )
}

export default ColorPicker