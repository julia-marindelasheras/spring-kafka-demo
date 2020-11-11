import React, {useReducer, useRef} from 'react';
import VitalityEditModal from '../dialogs/ess-vitality';
import VitalityList from './vitality-list';
import {initialValue, reducer} from './reducer';
import {parseConfigurations} from './helper';

import './style.css';

export default () => {
  const emptyModel = {
    key: '',
    values: '',
    dynamic: '',
    tags: '',
    description: '',
  };
  const [state, dispatch] = useReducer(reducer, initialValue(emptyModel));
  let tableRef = useRef();

  return (
    <main className="main-box">
      <VitalityList
        data={state.data}
        mainDispatcher={dispatch}
        parseConfigurations={parseConfigurations}
        tableRef={tableRef}
      />
      <VitalityEditModal
        open={state.open}
        editableFields={state.editableFields}
        mainDispatcher={dispatch}
        onSuccess={() => tableRef.current.refresh()}
        parseConfigurations={parseConfigurations}
      />
    </main>
  );
};
