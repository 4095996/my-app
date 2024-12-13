import React, { useState, useEffect } from 'react';
import {Rnd} from "react-rnd";

const data = {
    "type": "text",
    "id": "6.2.8. Порядок присадки и требования по расходу шлакообразующих материалов и охладителей.",
    "tags": [
        "Присадки",
        "Шлакообразующие",
        "Охладители"
    ],
    "parts": [
        {
            "type": "data",
            "id": "Таблица Б.14 - Расход извести на плавку в зависимости от массовой доли кремния в чугуне, требуемой массовой доли фосфора в готовой стали",
            "data_args": [
                "Фосфор_гот_%",
                "Массовая_доля_кремния_в_чугуне_%",
                "Массовая_доля_кремния_в_чугуне_%",
                "Массовая_доля_кремния_в_чугуне_%",
                "Массовая_доля_кремния_в_чугуне_%",
                "Массовая_доля_кремния_в_чугуне_%",
                "Массовая_доля_кремния_в_чугуне_%",
                "Массовая_доля_кремния_в_чугуне_%",
                "Массовая_доля_кремния_в_чугуне_%"
            ],
            "data_set": [
                ["", "0.20..0.34", "0.35..0.44", "0.45..0.54", "0.55..0.64", "0.65..0.74",
                    "0.75..0.84", "abc", "0.95..1"],
                ["0..0.020",
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "7.0..9.0" },
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "7.0..9.0" }, //7.5..9.5
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "7.0..9.0" }, //8.5..10.5
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "9.5..11.5" },
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "10.5..12.5" },
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "11.5..13.5" },
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "abc" },
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "13.5..15.5" }
                ],
                ["0.021..0.025",
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "5.5..7.5" }, //6.5..8.5
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "7.0..9.0" },
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "8.0..10.0" },
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "9.0..11.0" },
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "10.0..12.0" },
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "11.0..13.0" },
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "abc" },
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "13.0..15.0" }
                ],
                ["0.026..0.030",
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "5.5..7.5" }, //6.0..8.0
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "6.5..8.5" },
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "7.5..9.5" },
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "8.5..10.5" },
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "9.5..11.5" },
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "10.5..12.5" },
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "abc" },
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "12.5..14.5" }
                ],
                ["0.031..0.035",
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "5.5..7.5" },
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "6.0..8.0" },
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "7.0..9.0" },
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "8.0..10.0" },
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "9.0..11.0" },
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "10.0..12.0" },
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "abc" },
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "12.0..14.0" }
                ]
            ],
            "ignore_cols": [],
            "ignore_lines": []
        },
    ]
};

export const Table = () => {
    const [mode, setMode] = useState('default');
    const [newData, setNewData] = useState(null);

    const modifiedRows = (arr) => {
        if(mode === 'default') return arr;

        const result = [];
        let prevValue = null;
        let colSpan = 1;

        for (let i = 0; i < arr.length; i++) {
            const currentValue = typeof arr[i] === 'object' ? arr[i].value : arr[i];
            if (currentValue === prevValue) {
                colSpan++;
                const index = result.findIndex(item => item.value === currentValue && item.colSpan > 0);
                result[index].colSpan = colSpan;
                result.push({
                    value: currentValue,
                    colSpan: 0,
                    rowSpan: 0
                });
            } else {
                result.push({
                    value: currentValue,
                    colSpan: 1,
                    rowSpan: 1
                });
                colSpan = 1;
            }
            prevValue = currentValue;
        }
        return result;
    };

    const modifiedColumns = (data) => {
        if(mode === 'default') return data;
        data.forEach(table => {
            for (let i = 1; i < table.rows.length; i++) { // Начинаем с второго подмассива
                for (let j = 0; j < table.rows[i].length; j++) {
                    let currentItem = table.rows[i][j];

                    for (let k = 0; k < table.rows[i-1].length; k++) {
                        let upperItem = table.rows.map((arr, ind) => ind < i && table.rows[ind][j]).reverse().find(item => item !== false && (item.value === currentItem.value || currentItem.value === '') && item.colSpan > 0);
                        if(upperItem) {

                            if ((currentItem.value === upperItem.value || currentItem.value === '') && upperItem.colSpan === currentItem.colSpan) {


                                upperItem.rowSpan = upperItem.rowSpan + 1;
                                table.rows[i][j] = {
                                    value: table.rows[i][j].value,
                                    colSpan: 0,
                                    rowSpan: 0
                                }
                                j--;
                                break;
                            }
                        }
                    }
                }
            }
        });

        console.log('data', data)
        return data;
    }


    const handleResize = (e, direction, ref, delta, position, id) => {
        if(direction === 'up' || direction === 'bottom') {
            const [tableInd, rowInd] = id.split(['-']);
            const updatedData = [...newData ];
            updatedData[tableInd] = {...updatedData[tableInd]};
            updatedData[tableInd].style = [...updatedData[tableInd].style];
            updatedData[tableInd].style[rowInd] = [...updatedData[tableInd].style[rowInd].map(obj => ({...obj, height: ref.clientHeight}))]; // Создаем копию строки

            setNewData(updatedData);
        }
    }

    useEffect(() => {
        const newTablesData = data.parts.map(table => ({ //переделываем приходящие данные в удобные нам
            type: table.type,
            id: table.id,
            rows: [
                table.data_args.map(item => ({ value: item, colSpan: 1, rowSpan: 1 })),
                ...table.data_set.map(item => item.map(value => typeof value === 'string' ? ({value: value, colSpan: 1, rowSpan: 1}) : ({value: value.arg_val, colSpan: 1, rowSpan: 1})))
            ],
            style: [
                table.data_args.map((item) => (table.style ? {...item.style} : {})),
                ...table.data_set.map(item => item.map(value => typeof value === 'string' ? {} : {}))
            ],
        }));

        const newTablesData1 = newTablesData.map(table => ({...table, rows: table.rows.map(row => modifiedRows(row))})); //соединяем значения по строкам
        const newTablesData2 = modifiedColumns(newTablesData1);  //соединяем значения по колонкам и сетим

        setNewData(newTablesData2);
    }, [mode]);

    return (
        <div>
            <button
                onClick={() => setMode( mode === 'default' ? 'modified' : 'default')}
            >
                {
                    mode === 'default' ? "Модифицированный режим" : "Стандартный режим"
                }
            </button>
            {newData?.map((table, index) => (
                <table key={index} className="data-table">
                    <tbody>
                    {table.rows.map((row, rowIndex) => (
                        <tr id={rowIndex} key={rowIndex} style={{ height: newData[index]?.style[rowIndex][0]?.height ? `${newData[index].style[rowIndex][0].height}px` : 'auto'}}>
                            {row.map((cell, cellIndex) => (
                                    <td

                                        key={`${index}-${rowIndex}-${cellIndex}`}
                                        id={`${index}-${rowIndex}-${cellIndex}`}
                                        colSpan={cell.colSpan}
                                        rowSpan={cell.rowSpan}
                                        className="cell"
                                        style={{
                                            display: (cell.rowSpan === 0 || cell.colSpan === 0) ? 'none' : 'revert',
                                            height: newData[index]?.style[rowIndex][0]?.height ? `${newData[index].style[rowIndex][0].height}px`  : '40px',
                                    }}>
                                        <Rnd
                                            className="cellContainer"
                                            disableDragging={true}
                                            onResize={(e, direction, ref, delta, position) => handleResize(e, direction, ref, delta, position, `${index}-${rowIndex}-${cellIndex}`)}
                                        >
                                           <p>{cell.value}</p>
                                        </Rnd>
                                    </td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
            ))}
        </div>
    );
}