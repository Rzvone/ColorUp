package com.codecool.colorup.service;

import com.codecool.colorup.DTOS.CartPageDTO;
import com.codecool.colorup.DTOS.ProductCartDTO;
import com.codecool.colorup.model.Cart;

import java.util.List;

public interface CartService {
    void addToCart(Long userId, ProductCartDTO productCartDTO);
    List<CartPageDTO> getCartByUserId(Long id);
    int getTotalQuantityInCart(Cart cart);
}