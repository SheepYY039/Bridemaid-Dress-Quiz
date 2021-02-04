import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  Filter,
  ShowButton,
  SimpleShowLayout,
  DateField,
  Show,
  ArrayField,
  SingleFieldList,
  ChipField,
} from 'react-admin';

const ResponseTitle = ({ record }) => (
  <span>
    Response
    {record ? `${record.id}` : ''}
  </span>
);

const ResponseFilter = (props) => (
  <Filter {...props}>
    {/* <TextInput label="Search" source="answerNames" alwaysOn /> */}
  </Filter>
);

export const ResponseList = (props) => (
  <List
    filters={<ResponseFilter />}
    {...props}
    title="User Responses"
    sort={{ field: 'dateAnswered', order: 'DESC' }}
  >
    <Datagrid>
      {/* <TextField source="id" /> */}
      <DateField source="dateAnswered" />
      <TextField source="id" />

      <ArrayField label="Choices" source="answerNames">
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ArrayField>
      <ShowButton />
      {/* <DeleteButton redirect={false} /> */}
    </Datagrid>
  </List>
);

export const ResponseShow = (props) => (
  <Show title={<ResponseTitle />} {...props}>
    <SimpleShowLayout {...props}>
      <TextField source="id" />
      <TextField source="user" />
      <ArrayField label="Choices" source="answerNames">
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ArrayField>
      <DateField source="dateAnswered" showTime />
    </SimpleShowLayout>
  </Show>
);
