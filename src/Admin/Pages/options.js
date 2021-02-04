import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  Edit,
  SimpleForm,
  TextInput,
  Filter,
  SelectInput,
  ReferenceInput,
  ImageField,
  Create,
  ImageInput,
  ShowButton,
  DeleteButton,
  Show,
  SimpleShowLayout,
  NumberField,
  DateField,
  NumberInput,
} from 'react-admin';

const OptionFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="name" alwaysOn />
    {/* <SelectInput optionText="categoryId" label="Category" allowEmpty /> */}
    <ReferenceInput reference="Category" source="categoryId">
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);

const OptionTitle = ({ record }) => (
  <span>
    Option
    {record ? `"${record.name}"` : ''}
  </span>
);

// const validateOptionCreation = (values) => {
//   const errors = {};
//   if (!values.name) {
//     errors.name = ["The name is required"];
//   }
//   if (!values.category) {
//     errors.category = ["The category is required"];
//   }
//   return errors;
// };

export const OptionsList = (props) => (
  <List
    filters={<OptionFilter />}
    {...props}
    title="Options for Quiz Questions"
    sort={{ field: 'categoryId', order: 'ASC' }}
    perPage={4}
  >
    <Datagrid>
      {/* <TextField source="index" /> */}
      <TextField source="name" />
      <ReferenceField reference="Category" source="categoryId">
        <TextField source="name" />
      </ReferenceField>
      <NumberField label="Order in category" source="order" sortByOrder="ASC" />
      <ImageField label="Image" source="imageUrl.src" title="imageUrl.title" />
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton label="" redirect={false} />
    </Datagrid>
  </List>
);

export const OptionShow = (props) => (
  <Show title={<OptionTitle />} {...props}>
    <SimpleShowLayout {...props}>
      <TextField source="id" />
      <TextField source="name" />
      <ReferenceField reference="Category" source="categoryId">
        <TextField source="name" />
      </ReferenceField>
      <NumberField label="Order in category" source="order" />
      <ImageField label="Image" source="imageUrl.src" title="imageUrl.title" />
      <DateField source="lastupdate" showTime />
      <TextField source="updatedby" />
    </SimpleShowLayout>
  </Show>
);

export const OptionEdit = (props) => (
  <Edit title={<OptionTitle />} {...props}>
    <SimpleForm>
      <TextInput source="id" disabled />
      {/* <NumberInput source="index" disabled /> */}
      <TextInput source="name" />
      <ReferenceInput reference="Category" source="categoryId">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <NumberInput label="Order in category" source="order" />
      <ImageInput source="imageUrl" label="Option Image" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);

export const OptionCreate = (props) => (
  <Create {...props}>
    <SimpleForm redirect="list">
      {/* <NumberInput source="index" disabled /> */}
      <TextInput source="name" />
      <ReferenceInput reference="Category" source="categoryId">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <NumberInput label="Order in category" source="order" />
      <ImageInput source="imageUrl" label="Option Image" accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Create>
);
