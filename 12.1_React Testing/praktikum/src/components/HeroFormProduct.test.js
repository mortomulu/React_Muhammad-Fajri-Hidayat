import { render, fireEvent, screen } from "@testing-library/react";
import HeroForm from "./HeroForm";

test("validasi form input Product Name tidak boleh kosong", () => {
  render(<HeroForm />);

  // Cari input Product Name
  const productNameInput = screen.getByLabelText("Product Name");

  // Simulasikan input kosong
  fireEvent.change(productNameInput, { target: { value: "" } });

  // Cek pesan error
  expect(screen.getByText("Please fill in all fields.")).toBeInTheDocument();
});

test("validasi form input Product Name tidak mengandung karakter tidak diizinkan", () => {
  render(<HeroForm />);

  // Cari input Product Name
  const productNameInput = screen.getByLabelText("Product Name");

  // Simulasikan input dengan karakter tidak diizinkan
  fireEvent.change(productNameInput, { target: { value: "@#$%" } });

  // Cek pesan error
  expect(
    screen.getByText(
      "Input contains invalid characters. Please remove @#$% characters."
    )
  ).toBeInTheDocument();
});

test("validasi form input Product Name tidak melebihi 25 karakter", () => {
  render(<HeroForm />);

  // Cari input Product Name
  const productNameInput = screen.getByLabelText("Product Name");

  // Simulasikan input dengan lebih dari 25 karakter
  fireEvent.change(productNameInput, {
    target: { value: "Nama Produk yang sangat panjang melebihi 25 karakter" },
  });

  // Cek pesan error
  expect(
    screen.getByText("Product Name must not exceed 25 characters.")
  ).toBeInTheDocument();
});

test("validasi semua form field tidak boleh kosong", () => {
  render(<HeroForm />);

  // Simulasikan submit form tanpa mengisi field
  fireEvent.submit(screen.getByTestId("hero-form"));

  // Cek pesan error
  expect(screen.getByText("Please fill in all fields.")).toBeInTheDocument();
});
