package com.pugnascotia.reactdemo.products;

public interface ProductRepository {

	Iterable<Product> findAll();

	Product save(Product product);

	Product find(Long id);

	// Product delete(String name);

}
