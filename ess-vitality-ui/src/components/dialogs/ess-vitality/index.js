import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Modal, useToast } from '@connections/react-nui';
import * as helper from './helper';

export default props => {
  const toast = useToast();
  const { t } = useTranslation();

  return (
    <Modal
      title="Property Edition"
      onSubmit={() => {
        helper.submit(props, toast, t);
      }}
      showDialog={() => props.open}
      toggleDialog={() =>
        props.mainDispatcher({ type: 'SET_OPEN', value: !props.open })
      }
    >
      <div className="nui-textfield">
        <label htmlFor="title" className="nui-textfield__label">
          <Trans>connections.key</Trans>
        </label>
        <input
          id="key"
          name="key"
          value={props.editableFields.key}
          type="text"
          className="nui-textfield__input"
          readOnly
        />
      </div>
      <div className="nui-textfield">
        <label htmlFor="description" className="nui-textfield__label">
          <Trans>connections.description</Trans>
        </label>
        <textarea
          id="description"
          name="description"
          value={props.editableFields.description}
          type="text"
          className={'nui-textfield__input disable-textarea-resize'}
          readOnly
        />
      </div>
      <div className="nui-textfield">
        <label htmlFor="tags" className="nui-textfield__label">
          <Trans>connections.tags</Trans>
        </label>
        <input
          id="tags"
          name="tags"
          value={props.editableFields.tags}
          type="text"
          className="nui-textfield__input"
          readOnly
        />
      </div>
      <div className="nui-textfield">
        <label htmlFor="values" className="nui-textfield__label">
          <Trans>connections.values</Trans>
        </label>
        <textarea
          id="values"
          name="values"
          value={props.editableFields.values}
          onChange={event => helper.onInputChanged(props, event)}
          className={'nui-textfield__input only-vertical-textarea-resize'}
        />
        <span className="nui-textfield__sub-label">
          {props.editableFields.format}
        </span>
      </div>
    </Modal>
  );
};
