import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CodingCompForm from '../../Components/PostOpportunity/sections/CodingComp/CodingCompForm';
import FullTimeForm from '../../Components/PostOpportunity/sections/FullTime/FullTimeForm';
import CodingComp from '../../Components/PostOpportunity/sections/CodingComp/CodingComp';
import HackathonsForm from '../../Components/PostOpportunity/sections/Hackathons/HackathonsForm';
import InternshipForm from '../../Components/PostOpportunity/sections/Internships/InternshipForm';
import ScholarshipForm from '../../Components/PostOpportunity/sections/Scholarships/ScholarshipForm';

test('<CodingCompForm /> updates parent state and calls onSubmit', () => {
  const createOpportunity = jest.fn();

  const component = render(
    <CodingCompForm createOpporuntity={createOpportunity} />
  );
  const { getAllByPlaceholderText } = render(<CodingCompForm />);
  const input = getAllByPlaceholderText('Coding Competition Name')[0];
  const form = component.container.querySelector('form');

  fireEvent.change(input, {
    target: { value: 'testing of forms could be easier' },
  });
  expect(input.value).toEqual('testing of forms could be easier');

  fireEvent.submit(form);
  expect(createOpportunity.mock.calls).toHaveLength(0);
});
test('<FullTime /> updates parent state and calls onSubmit', () => {
  const createOpportunity = jest.fn();

  const component = render(
    <FullTimeForm createOpporuntity={createOpportunity} />
  );
  const { getAllByPlaceholderText } = render(<FullTimeForm />);
  const input = getAllByPlaceholderText('Company Name')[0];
  const form = component.container.querySelector('form');

  fireEvent.change(input, {
    target: { value: 'testing of forms could be easier' },
  });
  expect(input.value).toEqual('testing of forms could be easier');

  fireEvent.submit(form);
  expect(createOpportunity.mock.calls).toHaveLength(0);
});
test('<Hackathons /> updates parent state and calls onSubmit', () => {
  const createOpportunity = jest.fn();

  const component = render(
    <HackathonsForm createOpporuntity={createOpportunity} />
  );
  const { getAllByPlaceholderText } = render(<HackathonsForm />);
  const input = getAllByPlaceholderText('Hackathon Name')[0];
  const form = component.container.querySelector('form');

  fireEvent.change(input, {
    target: { value: 'testing of forms could be easier' },
  });
  expect(input.value).toEqual('testing of forms could be easier');

  fireEvent.submit(form);
  expect(createOpportunity.mock.calls).toHaveLength(0);
});
test('<Internships /> updates parent state and calls onSubmit', () => {
  const createOpportunity = jest.fn();

  const component = render(
    <InternshipForm createOpporuntity={createOpportunity} />
  );
  const { getAllByPlaceholderText } = render(<InternshipForm />);
  const input = getAllByPlaceholderText('Company Name')[0];
  const form = component.container.querySelector('form');

  fireEvent.change(input, {
    target: { value: 'testing of forms could be easier' },
  });
  expect(input.value).toEqual('testing of forms could be easier');

  fireEvent.submit(form);
  expect(createOpportunity.mock.calls).toHaveLength(0);
});
test('<Scholarships /> updates parent state and calls onSubmit', () => {
  const createOpportunity = jest.fn();

  const component = render(
    <ScholarshipForm createOpporuntity={createOpportunity} />
  );
  const { getAllByPlaceholderText } = render(<ScholarshipForm />);
  const input = getAllByPlaceholderText('Scholarship Name')[0];
  const form = component.container.querySelector('form');

  fireEvent.change(input, {
    target: { value: 'testing of forms could be easier' },
  });
  expect(input.value).toEqual('testing of forms could be easier');

  fireEvent.submit(form);
  expect(createOpportunity.mock.calls).toHaveLength(0);
});
