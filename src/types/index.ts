export interface Integrante { id:string; nome:string; rm:string; turma:string; github:string; linkedin:string; funcao:string; foto?:string }
export interface AcaoSustentavel { id:number; titulo:string; descricao:string; pontos:number; categoria:'Energia'|'Resíduos'|'Mobilidade'|'Consumo' }
export interface Mensagem { id:number; autor:'usuario'|'avatar'; texto:string }
