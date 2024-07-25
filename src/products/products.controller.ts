import { Body, Controller, Delete, Get, Inject, Param, Patch, Post, Query } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PaginationDto } from 'src/common';
import { PRODUCT_SERVICE } from 'src/config';

@Controller('products')
export class ProductsController {
  constructor(
    @Inject(PRODUCT_SERVICE) private readonly productsClient: ClientProxy
  ) { 
    
  }

  @Post()
  CreateProduct() {
    return 'Crea un producto';
  }

  @Get()
  findAllProducts(@Query() paginationDto: PaginationDto) {
    // return 'Lista de productos';
    return this.productsClient.send({ cmd: 'find_all_products' }, paginationDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return 'Esta funcion regresa el producto ' + id;
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return 'Esta funcion elimina el producto ' + id;
  }

  @Patch(':id')
  updateProduct(
    @Param('id') id: string,
    @Body() body: any
  ) {
    return 'Esta funcion actualiza el producto ';
  }


}
