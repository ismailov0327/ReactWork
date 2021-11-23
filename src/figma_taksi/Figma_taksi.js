import React from 'react'
import Table from 'react-bootstrap/Table'
import './Figma_taksi.scss'
import { AiOutlineCheckCircle } from 'react-icons/ai';
function Figma_taksi() {
    return (
        <>
            <div className="container">
                <h3>Приём</h3>

                <Table>
                    <thead className="thead_header">
                        <tr>
                            <th className="th_border">Объект</th>
                            <th className="th_border">Тип</th>
                            <th className="th_border">АУП</th>
                            <th className="th_border">Бриг.</th>
                            <th className="th_border">Раб.</th>
                            <th className="th_border">Количество</th>
                            <th className="th_border">Операции</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td><p className="number">1</p>  Юнусабад дом</td>
                            <td>Зав/Обе/Ужин/Ночь</td>
                            <td>12</td>
                            <td>123</td>
                            <td>543</td>
                            <td>675</td>
                            <td> <button className="button"> <AiOutlineCheckCircle /> Принять</button> </td>
                        </tr>

                        <tr>
                            <td><p className="number">2</p>  Юнусабад дом</td>
                            <td>Ужин/Ночь</td>
                            <td>12</td>
                            <td>123</td>
                            <td>543</td>
                            <td>675</td>
                            <td><button className="button"> <AiOutlineCheckCircle /> Принять</button></td>
                        </tr>

                        <tr>
                            <td><p className="number">3</p>  Юнусабад дом</td>
                            <td>Обе/Ужин</td>
                            <td>12</td>
                            <td>123</td>
                            <td>543</td>
                            <td>675</td>
                            <td><button className="button"> <AiOutlineCheckCircle /> Принять</button></td>
                        </tr>

                        <tr>
                            <td><p className="number">4</p>  Юнусабад дом</td>
                            <td>Зав/Ночь</td>
                            <td>12</td>
                            <td>123</td>
                            <td>543</td>
                            <td>675</td>
                            <td><button className="button"> <AiOutlineCheckCircle /> Принять</button></td>
                        </tr>

                        <tr>
                            <td><p className="number">5</p>  Юнусабад дом</td>
                            <td>Зав/Ночь</td>
                            <td>12</td>
                            <td>123</td>
                            <td>543</td>
                            <td>675</td>
                            <td><button className="button"> <AiOutlineCheckCircle /> Принять</button></td>
                        </tr>

                        <tr>
                            <td><p className="number">6</p> Юнусабад дом</td>
                            <td>Зав/Ночь</td>
                            <td>12</td>
                            <td>123</td>
                            <td>543</td>
                            <td>675</td>
                            <td><button className="button"> <AiOutlineCheckCircle /> Принять</button></td>
                        </tr>
                    </tbody>

                  
                    
                </Table>

            </div>
        </>
    )
}

export default Figma_taksi
