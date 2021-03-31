/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react'
import DataTable from 'react-data-table-component'

import { Button, ButtonGroup } from '@material-ui/core'
import { ArrowDownward, Delete, Edit } from '@material-ui/icons'

import './cliente.css'
import ModalForm from './modalForm'
import { URL, useDelete } from '../../hooks/model.hook'

const cols = [
    ['id', '3%'],
    ['foto', '15%'],
    ['nombre', '10%'],
    ['correo', '13%'],
    ['celular', '8%'],
    ['direccion', '15%'],
    ['estado', '15%'],
];

const columns = ({ setOpen, setModel, setReload }) => {
    let columns = cols.map(col => {
        let json = {
            name: col[0],
            width: col[1],
            selector: col[0],
            sortable: true,
            allowOverflow: true,
            center: col[0] === 'foto' || col[0] === 'direccion' || col[0] === 'estado',
            grow: 0,
            cell: col[0] === 'foto'
                ? ({ foto }) => <img height={35} src={foto} />
                : null
        }

        return json;
    });

    columns.push({
        width: '15%',
        name: 'Acción',
        center: true,
        button: true,
        compact: false,
        allowOverflow: true,
        cell: (row) => <>
            <ButtonGroup variant="outlined" size="medium">
                <Button
                    title="Editar"
                    style={{ color: 'green' }}
                    onClick={() => {
                        setModel(row)
                        setOpen(true)
                    }}
                >
                    <Edit fontSize="inherit" />
                </Button>
                <Button
                    title="Eliminar"
                    style={{ color: 'red' }}
                    onClick={async () => await useDelete(`${URL}/clientes/${row.id}`, {
                        public_id: row.public_id, setReload
                    })}
                ><Delete fontSize="inherit" /></Button>
            </ButtonGroup>
        </>,
    });

    return columns;
}

const CustomDataTable = ({ rows, setReload }) => {
    const [model, setModel] = useState({})
    const [open, setOpen] = useState(false)

    return <>
        <DataTable
            pagination
            highlightOnHover
            title="Lista de Clientes"
            columns={columns({ setOpen, setModel, setReload })}
            data={rows}
            sortIcon={<ArrowDownward />}
        />
        <ModalForm
            model={model}
            open={open}
            setOpen={setOpen}
            setReload={setReload}
        />
    </>;
}

export default CustomDataTable;