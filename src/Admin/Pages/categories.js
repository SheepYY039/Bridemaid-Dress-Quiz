import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  Create,
  TextInput,
  SimpleForm,
  Edit,
  Filter,
  ShowButton,
  DeleteButton,
  SimpleShowLayout,
  DateField,
  Show,
  RichTextField,
  NumberInput,
  NumberField,
} from 'react-admin';

const CategoryTitle = ({ record }) => (
  <span>
    Category
    {record ? `"${record.name}"` : ''}
  </span>
);

const CategoryFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="name" alwaysOn />
  </Filter>
);

export const CategoryList = (props) => (
  <List
    filters={<CategoryFilter />}
    {...props}
    title="Categories(Questions) for the Quiz"
    sort={{ field: 'index', order: 'ASC' }}
  >
    <Datagrid>
      {/* <TextField source="index" /> */}
      <TextField source="name" />
      {/* <TextField source="id" /> */}
      <RichTextField label="Description" multiline="true" source="body" />
      <NumberField source="index" />
      <ShowButton />
      <EditButton />
      <DeleteButton redirect={false} />
    </Datagrid>
  </List>
);

export const CategoryShow = (props) => (
  <Show title={<CategoryTitle />} {...props}>
    <SimpleShowLayout {...props}>
      <TextField source="id" />
      <TextField source="name" />
      <RichTextField label="Description" multiline="true" source="body" />
      <NumberField source="index" />
      <DateField source="lastupdate" showTime />
      <TextField source="updatedby" />
    </SimpleShowLayout>
  </Show>
);
export const CategoryEdit = (props) => (
  <Edit title={<CategoryTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      {/* <TextInput disabled source="index" /> */}
      <TextInput source="name" />
      <TextInput label="Description" source="body" />
      <NumberInput source="index" step={1} min="1" />
    </SimpleForm>
  </Edit>
);

export const CategoryCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      {/* <TextInput source="index" /> */}
      <TextInput source="name" />
      <TextInput label="Description" source="body" />
      <NumberInput source="index" step={1} min="1" />
    </SimpleForm>
  </Create>
);
