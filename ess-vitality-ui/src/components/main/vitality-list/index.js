import React, { useReducer } from 'react';
import { useTranslation } from 'react-i18next';
import { Table } from '@connections/react-nui';
import * as helper from './helper';
import { initialValue, reducer } from './reducer';
import '../style.css';

const serverEnv = 'Server';
const wrapTextStyle = {
  maxWidth: '400px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};

export default props => {
  const [state, dispatch] = useReducer(reducer, initialValue(serverEnv));
  const { t } = useTranslation();

  const columns = [
    { name: 'key', text: t('terminal name') },
    { name: 'values', text: t('terminal channel')},
    { name: 'dynamic', text: t('terminal status'), cellStyle: wrapTextStyle }
  ];

  return (
    <div className="nui-shell__page-content">
      <Table
        data={props.data}
        columns={columns}
        loading={state.loading}
        onFetchData={() => helper.onFetchData(props, state, dispatch)}
        disablePagination
        ref={props.tableRef}
        actions={[
          {
            handler: row =>
              helper.openEditModal(
                ["quarantine", "notQuarantined"],
                props.mainDispatcher,
                row['index']
              ),
            text: t('connections.edit'),
            icon: 'edit',
          },
        ]}
      />
    </div>
  );
};
