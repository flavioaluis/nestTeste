import { Body, Controller, Get, Post } from '@nestjs/common';
import { CriaUsuarioDTO } from './dto/CriaUsuario.dto';
import { UsuarioRepository } from './usuario.repository';

@Controller('/usuarios')
export class UsuarioController {
  constructor(private usuarioRepository: UsuarioRepository) {}

  @Post()
  async criaUsuario(@Body() dadosDoUsuario: CriaUsuarioDTO) {
    const usuarioCadastrado = this.usuarioRepository.salvar(dadosDoUsuario);
    return usuarioCadastrado;
  }
  @Get()
  async listUsuarios() {
    return this.usuarioRepository.listar();
  }
}
