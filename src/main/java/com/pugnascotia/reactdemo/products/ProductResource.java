package com.pugnascotia.reactdemo.products;

import java.util.List;
import javax.inject.Inject;

import com.pugnascotia.reactdemo.utils.Functions;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;
import static org.springframework.web.bind.annotation.RequestMethod.DELETE;

/**
 * Handles creating new products and fetching all products via AJAX.
 */

@RestController
@RequestMapping(value = "/api", produces = APPLICATION_JSON_VALUE)
@Slf4j
public class ProductResource {

	private final ProductRepository repository;

	@Inject
	public ProductResource(ProductRepository repository) {
		this.repository = repository;
	}

	@RequestMapping(path = "/products", method = POST)
	public Product add(@RequestBody Product product) {
		log.info("{}", product);
		return repository.save(product);
	}

	@RequestMapping(path = "/products", method = GET)
	public List<Product> products() {
		// You shouldn't do this in a real app - you should page the data!
		return Functions.map(repository.findAll(), c -> c);
	}

	// @RequestMapping(path = "/product", method = DELETE)
	// public Product delete(
	// 	@RequestParam(value = "category") String name)
	// 	{
	// 	// You shouldn't do this in a real app - you should page the data!
	// 	return Functions.delete();
	// }
}
