import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProdutoRepository } from './produto.repository';
import { CriaProdutoDTO } from './dto/CriarProduto.dto';

@Controller('/produtos')
export class ProdutoController {
  constructor(private readonly produtoRepository: ProdutoRepository) {}

  @Post()
  async criaUsuario(@Body() dadosDoProduto: CriaProdutoDTO) {
    const produtoCadastrado = this.produtoRepository.salvar(dadosDoProduto);
    return produtoCadastrado;
  }
  @Get()
  async listProdutos() {
    return this.produtoRepository.listar();
  }
}
