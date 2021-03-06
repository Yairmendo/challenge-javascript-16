import React from 'react';

const Result = (props) => {
  const {
    radio, 
    b1,
    b2,
    br,
    o1, 
    o2, 
    or, 
    d1, 
    d2, 
    dr, 
    h1,
    h2,
    hr,
  } = props;
  return (
    <section className='Result'>
      <h2 className='Result__title' >Resultado</h2>
      <div className='Result__output'>
        <h3 className='Result__output-title-B'>Binario</h3>
        <h3 className='Result__output-title-O'>Octal</h3>
        <h3 className='Result__output-title-D'>Decimal</h3>
        <h3 className='Result__output-title-H'>Hexadecimal</h3>
        <h3 className='Result__output-title-n1'>Numero 1</h3>
        <h3 className='Result__output-title-n1-o titleMovil'>Numero 1</h3>
        <h3 className='Result__output-title-n1-d titleMovil'>Numero 1</h3>
        <h3 className='Result__output-title-n1-h titleMovil'>Numero 1</h3>
        <p className='Result__output-b1'>{b1}</p>
        <p className='Result__output-o1'>{o1}</p>
        <p className='Result__output-d1'>{d1}</p>
        <p className='Result__output-h1'>{h1}</p>
        {
          radio === 2 && (
            <>
              <h3 className='Result__output-title-n2'>Numero 2</h3>
              <h3 className='Result__output-title-r'>Resultado</h3>
              <h3 className='Result__output-title-n2-o titleMovil'>Numero 2</h3>
              <h3 className='Result__output-title-n2-d titleMovil'>Numero 2</h3>
              <h3 className='Result__output-title-n2-h titleMovil'>Numero 2</h3>
              <h3 className='Result__output-title-r-o titleMovil'>Resultado</h3>
              <h3 className='Result__output-title-r-d titleMovil'>Resultado</h3>
              <h3 className='Result__output-title-r-h titleMovil'>Resultado</h3>
              <p className='Result__output-b2'>{b2}</p>
              <p className='Result__output-br'>{br}</p>
              <p className='Result__output-o2'>{o2}</p>
              <p className='Result__output-or'>{or}</p>
              <p className='Result__output-d2'>{d2}</p>
              <p className='Result__output-dr'>{dr}</p>
              <p className='Result__output-h2'>{h2}</p>
              <p className='Result__output-hr'>{hr}</p>
            </>
          )
        }
      </div>
    </section>
  );
}

export default Result;