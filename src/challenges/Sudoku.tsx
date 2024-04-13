//grid input
//make list of combine inputs into an array 
//submit
//validation check
import { useState } from 'react';
import './SudokuStyles.css'

interface SudokuProps {
  theme: string | null;
}

type InitialValueType = {
  first: '',
  second: '',
  third: '',
  fourth: '',
  fifth: '',
  sixth: '',
  seventh: '',
  eighth: '',
  nineth: '',
}
const Sudoku = ({ theme }: SudokuProps) => {
  const initialValue: InitialValueType = {
    first: '',
    second: '',
    third: '',
    fourth: '',
    fifth: '',
    sixth: '',
    seventh: '',
    eighth: '',
    nineth: '',
  }
  const [resultMsg, setResultMsg] = useState<string>('')
  const [firstRow, setFirstRow] = useState<InitialValueType>(initialValue)
  const [secondRow, setSecondRow] = useState<InitialValueType>(initialValue)
  const [thirdRow, setThirdRow] = useState<InitialValueType>(initialValue)
  const [fourthRow, setFourthRow] = useState<InitialValueType>(initialValue)
  const [fifthRow, setFifthRow] = useState<InitialValueType>(initialValue)
  const [sixthRow, setSixthRow] = useState<InitialValueType>(initialValue)
  const [seventhRow, setSeventhRow] = useState<InitialValueType>(initialValue)
  const [eighthRow, setEighthRow] = useState<InitialValueType>(initialValue)
  const [ninethRow, setNinethRow] = useState<InitialValueType>(initialValue)

  const setFirstRowField = (field: string, value: string) => {
    setFirstRow({ ...firstRow, [field]: value })
  }
  const setSecondRowField = (field: string, value: string) => {
    setSecondRow({ ...secondRow, [field]: value })
  }
  const setThirdRowField = (field: string, value: string) => {
    setThirdRow({ ...firstRow, [field]: value })
  }
  const setFourthRowField = (field: string, value: string) => {
    setFourthRow({ ...fourthRow, [field]: value })
  }
  const setFifthRowField = (field: string, value: string) => {
    setFifthRow({ ...fifthRow, [field]: value })
  }
  const setSixthRowField = (field: string, value: string) => {
    setSixthRow({ ...sixthRow, [field]: value })
  }
  const setSeventhRowField = (field: string, value: string) => {
    setSeventhRow({ ...seventhRow, [field]: value })
  }
  const setEighthRowField = (field: string, value: string) => {
    setEighthRow({ ...eighthRow, [field]: value })
  }
  const setNinethRowField = (field: string, value: string) => {
    setNinethRow({ ...ninethRow, [field]: value })
  }

  const handleInputValidation = (result: string[][]) => {
    for (const cell of result) {
      if (cell.includes("")) {
        return false
      } else {
        if (cell.find(num => Number(num) < 1 || Number(num) > 9)) {
          return false
        } else {
          const unique = new Set()
          const duplicated = []

          cell.forEach(item => {
            if (unique.has(item)){
              duplicated.push(item)
            } else {
              unique.add(item)
            }
          })

          if (duplicated.length>0){
            return false 
          } else {
            return true
          }
        }
      }
    }


  }

  const handleSubmit = () => {
    var totalInput = []
    totalInput.push(
      Object.values(firstRow),
      Object.values(secondRow),
      Object.values(thirdRow),
      Object.values(fourthRow),
      Object.values(fifthRow),
      Object.values(sixthRow),
      Object.values(seventhRow),
      Object.values(eighthRow),
      Object.values(ninethRow)
    )

    console.log(totalInput)
    const validation = handleInputValidation(totalInput)

    validation ? setResultMsg('Success!') : setResultMsg('Please check input fields again.')
  }

  const handleReset = () => {
    setFifthRow(initialValue)
    setSecondRow(initialValue)
    setThirdRow(initialValue)
    setFourthRow(initialValue)
    setFifthRow(initialValue)
    setSixthRow(initialValue)
    setSeventhRow(initialValue)
    setEighthRow(initialValue)
    setNinethRow(initialValue)
    setResultMsg('')
  }

  return (
    <>
      <section className='grid-section'>
        <article className='grid-container'>
          {/*1,2,3 row - 1,2,3 column*/}
          <dl>
            <dt>
              <input
                className='input'
                value={firstRow.first}
                onChange={e => setFirstRowField('first', e.target.value)}
              />
              <input
                className='input'
                value={firstRow.second}
                onChange={e => setFirstRowField('second', e.target.value)} />
              <input
                className='input'
                value={firstRow.third}
                onChange={e => setFirstRowField('third', e.target.value)} />
            </dt>
            <dt>
              <input
                className='input'
                value={secondRow.first}
                onChange={e => setSecondRowField('first', e.target.value)}
              />
              <input
                className='input'
                value={secondRow.second}
                onChange={e => setSecondRowField('second', e.target.value)}
              />
              <input
                className='input'
                value={secondRow.third}
                onChange={e => setSecondRowField('third', e.target.value)}
              />
            </dt>
            <dt>
              <input
                className='input'
                value={thirdRow.first}
                onChange={e => setThirdRowField('first', e.target.value)}
              />
              <input
                className='input'
                value={thirdRow.second}
                onChange={e => setThirdRowField('second', e.target.value)}
              />
              <input
                className='input'
                value={thirdRow.third}
                onChange={e => setThirdRowField('third', e.target.value)}
              />
            </dt>
          </dl>
          {/*1,2,3 row - 4,5,6 column*/}
          <dl>
            <dt>
              <input
                className='input'
                value={firstRow.fourth}
                onChange={e => setFirstRowField('fourth', e.target.value)}
              />
              <input
                className='input'
                value={firstRow.fifth}
                onChange={e => setFirstRowField('fifth', e.target.value)} />
              <input
                className='input'
                value={firstRow.sixth}
                onChange={e => setFirstRowField('sixth', e.target.value)} />
            </dt>
            <dt>
              <input
                className='input'
                value={secondRow.fourth}
                onChange={e => setSecondRowField('fourth', e.target.value)}
              />
              <input
                className='input'
                value={secondRow.fifth}
                onChange={e => setSecondRowField('fifth', e.target.value)}
              />
              <input
                className='input'
                value={secondRow.sixth}
                onChange={e => setSecondRowField('sixth', e.target.value)}
              />
            </dt>
            <dt>
              <input
                className='input'
                value={thirdRow.fourth}
                onChange={e => setThirdRowField('fourth', e.target.value)}
              />
              <input
                className='input'
                value={thirdRow.fifth}
                onChange={e => setThirdRowField('fifth', e.target.value)}
              />
              <input
                className='input'
                value={thirdRow.sixth}
                onChange={e => setThirdRowField('sixth', e.target.value)}
              />
            </dt>
          </dl>
          {/*1,2,3 row - 7,8,9 column*/}
          <dl>
            <dt>
              <input
                className='input'
                value={firstRow.seventh}
                onChange={e => setFirstRowField('seventh', e.target.value)}
              />
              <input
                className='input'
                value={firstRow.eighth}
                onChange={e => setFirstRowField('eighth', e.target.value)} />
              <input
                className='input'
                value={firstRow.nineth}
                onChange={e => setFirstRowField('nineth', e.target.value)} />
            </dt>
            <dt>
              <input
                className='input'
                value={secondRow.seventh}
                onChange={e => setSecondRowField('seventh', e.target.value)}
              />
              <input
                className='input'
                value={secondRow.eighth}
                onChange={e => setSecondRowField('eighth', e.target.value)}
              />
              <input
                className='input'
                value={secondRow.nineth}
                onChange={e => setSecondRowField('nineth', e.target.value)}
              />
            </dt>
            <dt>
              <input
                className='input'
                value={thirdRow.seventh}
                onChange={e => setThirdRowField('seventh', e.target.value)}
              />
              <input
                className='input'
                value={thirdRow.eighth}
                onChange={e => setThirdRowField('eigth', e.target.value)}
              />
              <input
                className='input'
                value={thirdRow.nineth}
                onChange={e => setThirdRowField('nineth', e.target.value)}
              />
            </dt>
          </dl>
          {/*4,5,6 row - 1,2,3 col*/}
          <dl>
            <dt>
              <input
                className='input'
                value={fourthRow.first}
                onChange={e => setFourthRowField('first', e.target.value)}
              />
              <input
                className='input'
                value={fourthRow.second}
                onChange={e => setFourthRowField('second', e.target.value)}
              />
              <input
                className='input'
                value={fourthRow.third}
                onChange={e => setFourthRowField('third', e.target.value)}
              />
            </dt>
            <dt>
              <input
                className='input'
                value={fifthRow.first}
                onChange={e => setFifthRowField('first', e.target.value)}
              />
              <input
                className='input'
                value={fifthRow.second}
                onChange={e => setFifthRowField('second', e.target.value)}
              />
              <input
                className='input'
                value={fifthRow.third}
                onChange={e => setFifthRowField('third', e.target.value)}
              />
            </dt>
            <dt>
              <input
                className='input'
                value={sixthRow.first}
                onChange={e => setSixthRowField('first', e.target.value)}
              />
              <input
                className='input'
                value={sixthRow.second}
                onChange={e => setSixthRowField('second', e.target.value)}
              />
              <input
                className='input'
                value={sixthRow.third}
                onChange={e => setSixthRowField('third', e.target.value)}
              />
            </dt>
          </dl>
          {/*4,5,6 row - 4,5,6 col*/}
          <dl>
            <dt>
              <input
                className='input'
                value={fourthRow.fourth}
                onChange={e => setFourthRowField('fourth', e.target.value)}
              />
              <input
                className='input'
                value={fourthRow.fifth}
                onChange={e => setFourthRowField('fifth', e.target.value)}
              />
              <input
                className='input'
                value={fourthRow.sixth}
                onChange={e => setFourthRowField('sixth', e.target.value)}
              />
            </dt>
            <dt>
              <input
                className='input'
                value={fifthRow.fourth}
                onChange={e => setFifthRowField('fourth', e.target.value)}
              />
              <input
                className='input'
                value={fifthRow.fifth}
                onChange={e => setFifthRowField('fifth', e.target.value)}
              />
              <input
                className='input'
                value={fifthRow.sixth}
                onChange={e => setFifthRowField('sixth', e.target.value)}
              />
            </dt>
            <dt>
              <input
                className='input'
                value={sixthRow.fourth}
                onChange={e => setSixthRowField('fourth', e.target.value)}
              />
              <input
                className='input'
                value={sixthRow.fifth}
                onChange={e => setSixthRowField('fifth', e.target.value)}
              />
              <input
                className='input'
                value={sixthRow.sixth}
                onChange={e => setSixthRowField('sixth', e.target.value)}
              />
            </dt>
          </dl>
          {/*4,5,6 row - 7,8,9 col*/}
          <dl>
            <dt>
              <input
                className='input'
                value={fourthRow.seventh}
                onChange={e => setFourthRowField('seventh', e.target.value)}
              />
              <input
                className='input'
                value={fourthRow.eighth}
                onChange={e => setFourthRowField('eighth', e.target.value)}
              />
              <input
                className='input'
                value={fourthRow.nineth}
                onChange={e => setFourthRowField('nineth', e.target.value)}
              />
            </dt>
            <dt>
              <input
                className='input'
                value={fifthRow.seventh}
                onChange={e => setFifthRowField('seventh', e.target.value)}
              />
              <input
                className='input'
                value={fifthRow.eighth}
                onChange={e => setFifthRowField('eighth', e.target.value)}
              />
              <input
                className='input'
                value={fifthRow.nineth}
                onChange={e => setFifthRowField('nineth', e.target.value)}
              />
            </dt>
            <dt>
              <input
                className='input'
                value={sixthRow.seventh}
                onChange={e => setSixthRowField('seventh', e.target.value)}
              />
              <input
                className='input'
                value={sixthRow.eighth}
                onChange={e => setSixthRowField('eighth', e.target.value)}
              />
              <input
                className='input'
                value={sixthRow.nineth}
                onChange={e => setSixthRowField('nineth', e.target.value)}
              />
            </dt>
          </dl>
          {/*7,8,9 row - 1,2,3 col*/}
          <dl>
            <dt>
              <input
                className='input'
                value={seventhRow.first}
                onChange={e => setSeventhRowField('first', e.target.value)}
              />
              <input
                className='input'
                value={seventhRow.second}
                onChange={e => setSeventhRowField('second', e.target.value)}
              />
              <input
                className='input'
                value={seventhRow.third}
                onChange={e => setSeventhRowField('third', e.target.value)}
              />
            </dt>
            <dt>
              <input
                className='input'
                value={eighthRow.first}
                onChange={e => setEighthRowField('first', e.target.value)}
              />
              <input
                className='input'
                value={eighthRow.second}
                onChange={e => setEighthRowField('second', e.target.value)}
              />
              <input
                className='input'
                value={eighthRow.third}
                onChange={e => setEighthRowField('third', e.target.value)}
              />
            </dt>
            <dt>
              <input
                className='input'
                value={ninethRow.first}
                onChange={e => setNinethRowField('first', e.target.value)}
              />
              <input
                className='input'
                value={ninethRow.second}
                onChange={e => setNinethRowField('second', e.target.value)}
              />
              <input
                className='input'
                value={ninethRow.third}
                onChange={e => setNinethRowField('third', e.target.value)}
              />
            </dt>
          </dl>
          {/*7,8,9 row - 4,5,6 col*/}
          <dl>
            <dt>
              <input
                className='input'
                value={seventhRow.fourth}
                onChange={e => setSeventhRowField('fourth', e.target.value)}
              />
              <input
                className='input'
                value={seventhRow.fifth}
                onChange={e => setSeventhRowField('fifth', e.target.value)}
              />
              <input
                className='input'
                value={seventhRow.sixth}
                onChange={e => setSeventhRowField('sixth', e.target.value)}
              />
            </dt>
            <dt>
              <input
                className='input'
                value={eighthRow.fourth}
                onChange={e => setEighthRowField('fourth', e.target.value)}
              />
              <input
                className='input'
                value={eighthRow.fifth}
                onChange={e => setEighthRowField('fifth', e.target.value)}
              />
              <input
                className='input'
                value={eighthRow.sixth}
                onChange={e => setEighthRowField('sixth', e.target.value)}
              />
            </dt>
            <dt>
              <input
                className='input'
                value={ninethRow.fourth}
                onChange={e => setNinethRowField('fourth', e.target.value)}
              />
              <input
                className='input'
                value={ninethRow.fifth}
                onChange={e => setNinethRowField('fifth', e.target.value)}
              />
              <input
                className='input'
                value={ninethRow.sixth}
                onChange={e => setNinethRowField('sixth', e.target.value)}
              />
            </dt>
          </dl>
          {/*7,8,9 row - 7,8,9 col*/}
          <dl>
            <dt>
              <input
                className='input'
                value={seventhRow.seventh}
                onChange={e => setSeventhRowField('seventh', e.target.value)}
              />
              <input
                className='input'
                value={seventhRow.eighth}
                onChange={e => setSeventhRowField('eighth', e.target.value)}
              />
              <input
                className='input'
                value={seventhRow.nineth}
                onChange={e => setSeventhRowField('nineth', e.target.value)}
              />
            </dt>
            <dt>
              <input
                className='input'
                value={eighthRow.seventh}
                onChange={e => setEighthRowField('seventh', e.target.value)}
              />
              <input
                className='input'
                value={eighthRow.eighth}
                onChange={e => setEighthRowField('eighth', e.target.value)}
              />
              <input
                className='input'
                value={eighthRow.nineth}
                onChange={e => setEighthRowField('nineth', e.target.value)}
              />
            </dt>
            <dt>
              <input
                className='input'
                value={ninethRow.seventh}
                onChange={e => setNinethRowField('seventh', e.target.value)}
              />
              <input
                className='input'
                value={ninethRow.eighth}
                onChange={e => setNinethRowField('eighth', e.target.value)}
              />
              <input
                className='input'
                value={ninethRow.nineth}
                onChange={e => setNinethRowField('nineth', e.target.value)}
              />
            </dt>
          </dl>
        </article>
        <article className='btn-section' >
          <button onClick={handleSubmit} id='theme'>
            Submit
          </button>
          <button onClick={handleReset} id='theme'>
            Reset
          </button>
        </article>
        <p>{resultMsg}</p>
      </section >
    </>

  )
}

export default Sudoku