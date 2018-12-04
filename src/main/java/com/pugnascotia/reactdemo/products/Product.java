package com.pugnascotia.reactdemo.products;

import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Simple data container class. We need a no-args constructor so that Jackson
 * can deserialise these.
 */
@Data
@NoArgsConstructor
public class Product {
	private Long id;
	private String category;
	private String content;

	public Product(String category, String content) {
		setCategory(category);
		setContent(content);
	}
}
