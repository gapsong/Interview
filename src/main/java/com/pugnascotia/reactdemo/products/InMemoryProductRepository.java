package com.pugnascotia.reactdemo.products;

import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
import java.util.concurrent.atomic.AtomicLong;
import javax.annotation.PostConstruct;

import org.springframework.stereotype.Repository;

@Repository
public class InMemoryProductRepository implements ProductRepository {

	private static AtomicLong counter = new AtomicLong();

	private final ConcurrentMap<Long, Product> products = new ConcurrentHashMap<>();

	@PostConstruct
	public void populateRepository() {
		this.save(new Product("Category1", "Eins"));
		this.save(new Product("Category2", "Zwei"));
	}

	@Override
	public Product save(Product product) {
		Long id = product.getId();
		if (id == null) {
			id = counter.incrementAndGet();
			product.setId(id);
		}
		this.products.put(id, product);
		return product;
	}

	@Override
	public Product find(Long id) {
		return this.products.get(id);
	}

	@Override
	public Iterable<Product> findAll() {
		return this.products.values();
	}
}
