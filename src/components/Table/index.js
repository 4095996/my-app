import React, {useState} from 'react';

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
                    "0.75..0.84", "0.85..0.94", "0.95..1"],
                ["0..0.020",
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "7.0..9.0" },
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "7.0..9.0" }, //7.5..9.5
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "7.0..9.0" }, //8.5..10.5
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "9.5..11.5" },
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "10.5..12.5" },
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "11.5..13.5" },
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "12.5..14.5" },
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "13.5..15.5" }
                ],
                ["0.021..0.025",
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "6.5..8.5" },
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "7.0..9.0" },
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "8.0..10.0" },
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "9.0..11.0" },
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "10.0..12.0" },
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "11.0..13.0" },
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "12.0..14.0" },
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "13.0..15.0" }
                ],
                ["0.026..0.030",
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "6.0..8.0" },
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "6.5..8.5" },
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "7.5..9.5" },
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "8.5..10.5" },
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "9.5..11.5" },
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "10.5..12.5" },
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "11.5..13.5" },
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "12.5..14.5" }
                ],
                ["0.031..0.035",
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "5.5..7.5" },
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "6.0..8.0" },
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "7.0..9.0" },
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "8.0..10.0" },
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "9.0..11.0" },
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "10.0..12.0" },
                    { "type": "arg", "id": "Расход_извести_т", "arg_val": "11.0..13.0" },
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

    const newTableData = data.parts.map(table => ({
            type: table.type,
            id: table.id,
            rows: [
                table.data_args.map(item => ({ value: item, colSpan: 1, rowSpan: 1 })),
                ...table.data_set.map(item => item.map(value => typeof value === 'string' ? ({value: value, colSpan: 1, rowSpan: 1}) : ({value: value.arg_val, colSpan: 1, rowSpan: 1})))
            ]
    }));

    console.log('newTableData', newTableData);

    const modifiedRowsAndColumns = (arr) => {
        if(mode === 'default') return arr;

        const result = [];
        let prevValue = null;
        let colSpan = 1;

        for (let i = 0; i < arr.length; i++) {
            const currentValue = typeof arr[i] === 'object' ? arr[i].value : arr[i];

            if (currentValue === prevValue) {
                colSpan++;
                result[result.length - 1].colSpan = colSpan;
            } else {
                result.push({
                    value: currentValue,
                    colSpan: 1
                });
                colSpan = 1;
            }

            prevValue = currentValue;
        }

        console.log('result', result);



        return result;
    }

    return (
        <div>
            <button
                onClick={() => setMode( mode === 'default' ? 'modified' : 'default')}
            >
                {
                    mode === 'default' ? "Модифицированный режим" : "Стандартный режим"
                }
            </button>
            {newTableData.map((table, index) => (
                <table key={index} className="data-table">
                    {/*<thead>*/}
                    {/*<tr>*/}
                    {/*    {modifiedRowsAndColumns(part.data_args).map((item, idx) => (*/}
                    {/*        <th key={idx} colSpan={item.colSpan}>{item.value}</th>*/}
                    {/*    ))}*/}
                    {/*</tr>*/}
                    {/*</thead>*/}
                    <tbody>
                    {table.rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {modifiedRowsAndColumns(row).map((cell, cellIndex) => (
                                <td key={cellIndex} colSpan={cell.colSpan}>
                                    {cell.value}
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